import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpec {
  name: string;
  description?: string;
  features: Array<string>;
  pricingModel: PricingModel;
}

enum PricingModel {
  Freemium = "Freemium",
  Subscription = "Subscription",
  PayPerUse = "Pay Per Use"
}

interface CreateBusinessFormProps {
  onSubmit: (data: BusinessSpec) => void;
}

const CreateBusinessSpecification: React.FC<CreateBusinessFormProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>();

  const submitHandler: SubmitHandler<BusinessSpec> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/business-specification', data);
      onSubmit(data);
      reset();
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required." })}
          className={clsx(
            "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none",
            errors.name && "border-red-500"
          )}
        />
        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          {...register("description")}
          rows={3}
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features</label>
        <input
          type="text"
          id="features"
          {...register("features", { required: "At least one feature is required." })}
          placeholder="Enter features separated by commas"
          className={clsx(
            "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none",
            errors.features && "border-red-500"
          )}
        />
        {errors.features && <p className="text-red-500 text-xs italic">{errors.features.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="pricingModel" className="block text-sm font-medium text-gray-700">Pricing Model</label>
        <select
          id="pricingModel"
          {...register("pricingModel", { required: "Select a pricing model." })}
          className={clsx(
            "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none",
            errors.pricingModel && "border-red-500"
          )}
        >
          <option value="">Select Pricing Model</option>
          {Object.values(PricingModel).map(model => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
        {errors.pricingModel && <p className="text-red-500 text-xs italic">{errors.pricingModel.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={clsx(
          "w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium",
          loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        )}
      >
        {loading ? 'Creating...' : 'Create'}
      </button>
      
      {error && (
        <div className="mt-4 text-red-500">
          <p>{error}</p>
        </div>
      )}
    </form>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpec {
  name: string;
  description?: string;
  features: Array<string>;
  pricingModel: PricingModel;
}

enum PricingModel {
  Freemium = "Freemium",
  Subscription = "Subscription",
  PayPerUse = "Pay Per Use"
}

interface CreateBusinessFormProps {
  onSubmit: (data: BusinessSpec) => void;
}

const CreateBusinessSpecification: React.FC<CreateBusinessFormProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>();

  const submitHandler: SubmitHandler<BusinessSpec> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/business-specification', data);
      onSubmit(data);
      reset();
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required." })}
          className={clsx(
            "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none",
            errors.name && "border-red-500"
          )}
        />
        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          {...register("description")}
          rows={3}
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features</label>
        <input
          type="text"
          id="features"
          {...register("features", { required: "At least one feature is required." })}
          placeholder="Enter features separated by commas"
          className={clsx(
            "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none",
            errors.features && "border-red-500"
          )}
        />
        {errors.features && <p className="text-red-500 text-xs italic">{errors.features.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="pricingModel" className="block text-sm font-medium text-gray-700">Pricing Model</label>
        <select
          id="pricingModel"
          {...register("pricingModel", { required: "Select a pricing model." })}
          className={clsx(
            "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none",
            errors.pricingModel && "border-red-500"
          )}
        >
          <option value="">Select Pricing Model</option>
          {Object.values(PricingModel).map(model => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
        {errors.pricingModel && <p className="text-red-500 text-xs italic">{errors.pricingModel.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={clsx(
          "w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium",
          loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        )}
      >
        {loading ? 'Creating...' : 'Create'}
      </button>
      
      {error && (
        <div className="mt-4 text-red-500">
          <p>{error}</p>
        </div>
      )}
    </form>
  );
};

export default CreateBusinessSpecification;