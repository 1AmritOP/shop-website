"use client";
import { ChangeEvent, useState } from "react";
import { ArrowLeft, Loader, Plus, Upload } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [passKey, setPassKey] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>();
  const [backendImage, setBackendImage] = useState<Blob | null>();
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    setBackendImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (passKey !== process.env.NEXT_PUBLIC_SECRETKEY) {
        alert("Wrong PassKey");
        return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    if (backendImage) {
      formData.append("image", backendImage);
    }
    setLoading(true);
    try {
      const res = await axios.post("/api/product", formData);
      // console.log(res.data);
      setLoading(false);
      setName("");
      setPrice("");
      setPassKey("");
      setBackendImage(null);
      setPreviewImage(null);
      alert("Product added successfully");
    } catch (error) {
      console.log("Error : ", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative p-4 md:p-6 flex flex-col md:flex-row items-center justify-center font-sans bgYellow">
      <Link
        href="/"
        className="self-start mb-4 md:absolute md:top-6 md:left-6 md:mb-0 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-green-700 font-medium hover:bg-gray-50 transition-colors border border-gray-100 text-sm md:text-base"
      >
        <ArrowLeft size={18} />
        <span>Back to home</span>
      </Link>

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-5 md:p-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="border-2 border-green-600 rounded-full p-0.5">
              <Plus size={20} className="text-green-600" />
            </div>
            <h1 className="text-lg md:text-xl font-semibold text-gray-800">
              Add Your Product
            </h1>
          </div>
          <p className="text-gray-400 text-xs md:text-sm">
            Fill out the details below to add a new product.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
          {/* Grocery Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              type="text"
              name="name"
              placeholder="eg: sweets, Milk ..."
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700 placeholder-gray-400 text-sm md:text-base"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              required
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              placeholder="eg. 120"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700 placeholder-gray-400 text-sm md:text-base"
            />
          </div>

          {/* PassKey */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              PassKey <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setPassKey(e.target.value)}
              value={passKey}
              required
              type="text"
              name="passKey"
              placeholder="Enter PassKey"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700 placeholder-gray-400 text-sm md:text-base"
            />
          </div>

          {/* Upload Image Button */}
          <div className=" flex flex-col sm:flex-row gap-5 items-center">
            <label
              htmlFor="image"
              className="flex items-center justify-center gap-2 w-full sm:w-fit px-6 py-2.5 bg-green-50 rounded-lg text-green-700 font-medium hover:bg-green-100 transition-colors border border-green-100 text-sm md:text-base"
            >
              <Upload size={18} />
              <span>Upload image</span>
            </label>
            <input
              type="file"
              required
              onChange={handleImageChange}
              id="image"
              accept="image/*"
              className="hidden"
            />

            {previewImage && (
              <Image
                className="rounded-xl shadow-md border border-gray-200 object-cover"
                src={previewImage}
                alt="ProductImg"
                height={100}
                width={100}
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all mt-4 text-sm md:text-base"
          >
            {loading ? (
              <Loader className=" w-5 h-5 animate-spin" />
            ) : (
              "Add Grocery"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
