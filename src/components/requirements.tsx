import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  name: string;
  description?: string;
  type: string; // e.g., feature, bug fix, enhancement
  priority: number; // 1 (highest) to 5 (lowest)
}

interface GatherRequirementsFormValues {
  requirementName: string;
  requirementDescription: string;
  requirementType: string;
  requirementPriority: number;
}

const GatherRequirements: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<GatherRequirementsFormValues>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  const onSubmit = (data: GatherRequirementsFormValues) => {
    if (!data.requirementName || !data.requirementType || data.requirementPriority === undefined) return;

    const newRequirement: Requirement = {
      name: data.requirementName,
      description: data.requirementDescription,
      type: data.requirementType,
      priority: data.requirementPriority
    };

    setRequirements([...requirements, newRequirement]);
  };

  const handleSaveAndContinue = () => {
    setLoading(true);
    setTimeout(() => { // Simulate API call delay
      router.push('/next-page'); // Redirect to the next page after saving requirements
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
      <div className="mb-4">
        <label htmlFor="requirementName" className="block text-sm font-medium text-gray-700">Requirement Name</label>
        <input
          id="requirementName"
          type="text"
          {...register('requirementName', { required: true })}
          className={`mt-1 block w-full rounded-md shadow-sm ${errors.requirementName ? 'border-red-300' : ''}`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="requirementDescription" className="block text-sm font-medium text-gray-700">Requirement Description</label>
        <textarea
          id="requirementDescription"
          {...register('requirementDescription')}
          rows={3}
          className={`mt-1 block w-full rounded-md shadow-sm`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="requirementType" className="block text-sm font-medium text-gray-700">Requirement Type</label>
        <select
          id="requirementType"
          {...register('requirementType', { required: true })}
          className={`mt-1 block w-full rounded-md shadow-sm ${errors.requirementType ? 'border-red-300' : ''}`}
        >
          <option value="">Select Type</option>
          <option value="feature">Feature</option>
          <option value="bug fix">Bug Fix</option>
          <option value="enhancement">Enhancement</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="requirementPriority" className="block text-sm font-medium text-gray-700">Requirement Priority</label>
        <input
          id="requirementPriority"
          type="number"
          min={1}
          max={5}
          {...register('requirementPriority', { required: true })}
          className={`mt-1 block w-full rounded-md shadow-sm ${errors.requirementPriority ? 'border-red-300' : ''}`}
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {loading ? 'Saving...' : 'Save Requirement'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  name: string;
  description?: string;
  type: string; // e.g., feature, bug fix, enhancement
  priority: number; // 1 (highest) to 5 (lowest)
}

interface GatherRequirementsFormValues {
  requirementName: string;
  requirementDescription: string;
  requirementType: string;
  requirementPriority: number;
}

const GatherRequirements: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<GatherRequirementsFormValues>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  const onSubmit = (data: GatherRequirementsFormValues) => {
    if (!data.requirementName || !data.requirementType || data.requirementPriority === undefined) return;

    const newRequirement: Requirement = {
      name: data.requirementName,
      description: data.requirementDescription,
      type: data.requirementType,
      priority: data.requirementPriority
    };

    setRequirements([...requirements, newRequirement]);
  };

  const handleSaveAndContinue = () => {
    setLoading(true);
    setTimeout(() => { // Simulate API call delay
      router.push('/next-page'); // Redirect to the next page after saving requirements
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
      <div className="mb-4">
        <label htmlFor="requirementName" className="block text-sm font-medium text-gray-700">Requirement Name</label>
        <input
          id="requirementName"
          type="text"
          {...register('requirementName', { required: true })}
          className={`mt-1 block w-full rounded-md shadow-sm ${errors.requirementName ? 'border-red-300' : ''}`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="requirementDescription" className="block text-sm font-medium text-gray-700">Requirement Description</label>
        <textarea
          id="requirementDescription"
          {...register('requirementDescription')}
          rows={3}
          className={`mt-1 block w-full rounded-md shadow-sm`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="requirementType" className="block text-sm font-medium text-gray-700">Requirement Type</label>
        <select
          id="requirementType"
          {...register('requirementType', { required: true })}
          className={`mt-1 block w-full rounded-md shadow-sm ${errors.requirementType ? 'border-red-300' : ''}`}
        >
          <option value="">Select Type</option>
          <option value="feature">Feature</option>
          <option value="bug fix">Bug Fix</option>
          <option value="enhancement">Enhancement</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="requirementPriority" className="block text-sm font-medium text-gray-700">Requirement Priority</label>
        <input
          id="requirementPriority"
          type="number"
          min={1}
          max={5}
          {...register('requirementPriority', { required: true })}
          className={`mt-1 block w-full rounded-md shadow-sm ${errors.requirementPriority ? 'border-red-300' : ''}`}
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {loading ? 'Saving...' : 'Save Requirement'}
      </button>
    </form>
  );
};

export default GatherRequirements;