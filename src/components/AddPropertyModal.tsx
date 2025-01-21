import React, { useState, useEffect } from 'react';
import { X, Upload, Plus, Minus } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface AddPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPropertyAdded: () => void;
}

export function AddPropertyModal({ isOpen, onClose, onPropertyAdded }: AddPropertyModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    size: '',
    units: '',
    amenities: [''],
    photos: [''],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Get the current user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('You must be logged in to add a property');
      }

      const { data, error: supabaseError } = await supabase
        .from('properties')
        .insert([
          {
            name: formData.name,
            address: formData.address,
            size: parseInt(formData.size),
            units: parseInt(formData.units),
            amenities: formData.amenities.filter(Boolean),
            photos: formData.photos.filter(Boolean),
            user_id: user.id, // Add the user_id to comply with RLS
          },
        ])
        .select();

      if (supabaseError) throw supabaseError;

      onPropertyAdded();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const addAmenity = () => {
    setFormData(prev => ({
      ...prev,
      amenities: [...prev.amenities, ''],
    }));
  };

  const removeAmenity = (index: number) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.filter((_, i) => i !== index),
    }));
  };

  const addPhotoUrl = () => {
    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ''],
    }));
  };

  const removePhotoUrl = (index: number) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
          <h2 className="text-2xl font-semibold">Add New Property</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto px-6 py-8">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Property Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter property name"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter property address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                      Size (sqft)
                    </label>
                    <input
                      type="number"
                      id="size"
                      required
                      value={formData.size}
                      onChange={(e) => setFormData(prev => ({ ...prev, size: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter size in sqft"
                    />
                  </div>

                  <div>
                    <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Units
                    </label>
                    <input
                      type="number"
                      id="units"
                      required
                      value={formData.units}
                      onChange={(e) => setFormData(prev => ({ ...prev, units: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter number of units"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Amenities
                  </label>
                  <div className="space-y-3">
                    {formData.amenities.map((amenity, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={amenity}
                          onChange={(e) => {
                            const newAmenities = [...formData.amenities];
                            newAmenities[index] = e.target.value;
                            setFormData(prev => ({ ...prev, amenities: newAmenities }));
                          }}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter amenity"
                        />
                        <button
                          type="button"
                          onClick={() => removeAmenity(index)}
                          className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addAmenity}
                      className="inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 font-medium"
                    >
                      <Plus className="w-4 h-4" />
                      Add Amenity
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Photo URLs
                  </label>
                  <div className="space-y-3">
                    {formData.photos.map((photo, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="url"
                          value={photo}
                          onChange={(e) => {
                            const newPhotos = [...formData.photos];
                            newPhotos[index] = e.target.value;
                            setFormData(prev => ({ ...prev, photos: newPhotos }));
                          }}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter photo URL"
                        />
                        <button
                          type="button"
                          onClick={() => removePhotoUrl(index)}
                          className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addPhotoUrl}
                      className="inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 font-medium"
                    >
                      <Plus className="w-4 h-4" />
                      Add Photo URL
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4">
                <div className="max-w-3xl mx-auto flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Upload className="w-5 h-5 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      'Add Property'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}