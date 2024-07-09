import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ReferralModal = ({ isOpen, onClose }) => {
  const formik = useFormik({
    initialValues: {
      referrerName: '',
      referrerEmail: '',
      referrerMobile: '',
      refereeName: '',
      refereeEmail: '',
      refereeMobile: ''
    },
    validationSchema: Yup.object({
      referrerName: Yup.string().required('Referrer name is required'),
      referrerEmail: Yup.string().email('Invalid email address').required('Referrer email is required'),
      referrerMobile: Yup.string().matches(/^[0-9]+$/, 'Must be a number').min(10, 'Must be at least 10 digits').required('Referrer mobile number is required'),
      refereeName: Yup.string().required('Referee name is required'),
      refereeEmail: Yup.string().email('Invalid email address').required('Referee email is required'),
      refereeMobile: Yup.string().matches(/^[0-9]+$/, 'Must be a number').min(10, 'Must be at least 10 digits').required('Referee mobile number is required'),
    }),
    onSubmit: async (values,{resetForm}) => {
        try {
          await axios.post('http://localhost:5000/api/referrals', values);
          console.log('Form data submitted:', values);
resetForm();

          onClose(); 
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      }
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer Name</label>
            <input
              type="text"
              name="referrerName"
              value={formik.values.referrerName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {formik.touched.referrerName && formik.errors.referrerName && <p className="text-red-500 text-sm">{formik.errors.referrerName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer Email</label>
            <input
              type="email"
              name="referrerEmail"
              value={formik.values.referrerEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {formik.touched.referrerEmail && formik.errors.referrerEmail && <p className="text-red-500 text-sm">{formik.errors.referrerEmail}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer Mobile</label>
            <input
              type="tel"
              name="referrerMobile"
              value={formik.values.referrerMobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {formik.touched.referrerMobile && formik.errors.referrerMobile && <p className="text-red-500 text-sm">{formik.errors.referrerMobile}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Name</label>
            <input
              type="text"
              name="refereeName"
              value={formik.values.refereeName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {formik.touched.refereeName && formik.errors.refereeName && <p className="text-red-500 text-sm">{formik.errors.refereeName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Email</label>
            <input
              type="email"
              name="refereeEmail"
              value={formik.values.refereeEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {formik.touched.refereeEmail && formik.errors.refereeEmail && <p className="text-red-500 text-sm">{formik.errors.refereeEmail}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Mobile</label>
            <input
              type="tel"
              name="refereeMobile"
              value={formik.values.refereeMobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {formik.touched.refereeMobile && formik.errors.refereeMobile && <p className="text-red-500 text-sm">{formik.errors.refereeMobile}</p>}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal;
