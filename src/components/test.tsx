import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/TestType';

interface WriteTestProps {
  onTestCreated?: (test: Test) => void;
}

const WriteTests: React.FC<WriteTestProps> = ({ onTestCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createTest] = useMutation(CREATE_TEST, {
    variables: { title, description },
    onCompleted: (data) => {
      if (onTestCreated && data.createTest) {
        onTestCreated(data.createTest);
      }
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      await createTest();
    } catch (err) {
      console.error('Failed to create test:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Write a Test</h2>
      {error && <p role="alert" className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={5}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/TestType';

interface WriteTestProps {
  onTestCreated?: (test: Test) => void;
}

const WriteTests: React.FC<WriteTestProps> = ({ onTestCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createTest] = useMutation(CREATE_TEST, {
    variables: { title, description },
    onCompleted: (data) => {
      if (onTestCreated && data.createTest) {
        onTestCreated(data.createTest);
      }
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      await createTest();
    } catch (err) {
      console.error('Failed to create test:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Write a Test</h2>
      {error && <p role="alert" className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={5}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;