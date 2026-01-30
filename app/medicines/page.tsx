// FILE PATH: app/medicines/page.tsx

"use client";

import {
  ArrowLeft,
  Search,
  ShoppingBag,
  Star,
} from "lucide-react";

const categories = [
  { label: "Top picks-\nAyurveda", active: true },
  { label: "Mind Care" },
  { label: "Sexual\nWellness" },
  { label: "Bone, Joint\nand Muscle\nCare" },
  { label: "Ayurvedic\nStomach Care" },
  { label: "Cough, Cold\n& Fever" },
];

const products = [
  {
    id: 1,
    name:
      "Himalaya Wellness Ashwagandha Tablet | Stress Relief Supplement | Rejuvenates Mind & Body",
    qty: "60 tablets",
    rating: 4.4,
    reviews: 3816,
    price: 234,
    mrp: 260,
    discount: "10% off",
    offer: "₹211 order for ₹1200",
    badge: "Bestseller+",
    image:
      "https://images.unsplash.com/photo-1584305574647-1f3b29f4c2c7?q=80&w=300",
  },
  {
    id: 2,
    name:
      "Panch Tulsi Drops for Respiratory Relief and Healthy Immunity | by Tata 1mg",
    qty: "30 ml Drop",
    rating: 4.5,
    reviews: 1119,
    price: 85,
    mrp: 164,
    discount: "48% off",
    offer: "₹76.5 order for ₹1200",
    badge: "Bestseller+",
    image:
      "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?q=80&w=300",
  },
];

export default function MedicinesPage() {
  return (
    <div className="h-screen flex flex-col bg-white">
      {/* TOP BAR */}
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="flex items-center gap-3 px-4 py-3">
          <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <ArrowLeft size={18} />
          </button>

          <h1 className="flex-1 text-base font-semibold">
            The Ayurveda Store
          </h1>

          <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <Search size={18} />
          </button>

          <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT CATEGORY STRIP */}
        <div className="w-24 bg-gray-50 border-r overflow-y-auto">
          {categories.map((c, i) => (
            <div
              key={i}
              className={`text-xs text-center px-2 py-4 leading-tight whitespace-pre-line ${
                c.active
                  ? "bg-white border-l-4 border-pink-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {c.label}
            </div>
          ))}
        </div>

        {/* PRODUCT LIST */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-6">
          {/* SORT ROW */}
          <div className="flex items-center justify-between text-sm">
            <button className="border rounded-full px-3 py-1">
              Sort ↕
            </button>
            <span className="text-gray-500">
              Get by 2pm, Tomorrow
            </span>
          </div>

          {products.map((p) => (
            <div
              key={p.id}
              className="flex gap-3 border-b pb-5"
            >
              {/* IMAGE */}
              <img
                src={p.image}
                className="w-20 h-20 object-contain"
                alt={p.name}
              />

              {/* DETAILS */}
              <div className="flex-1 space-y-1">
                {p.badge && (
                  <span className="inline-block text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded">
                    {p.badge}
                  </span>
                )}

                <p className="text-sm font-medium leading-snug line-clamp-2">
                  {p.name}
                </p>

                <p className="text-xs text-gray-500">
                  {p.qty}
                </p>

                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-green-600 text-white px-1.5 py-0.5 rounded flex items-center gap-1">
                    {p.rating} <Star size={10} />
                  </span>
                  <span className="text-gray-500">
                    {p.reviews} ratings
                  </span>
                </div>

                <p className="text-xs text-gray-500">
                  Get by 2pm, Tomorrow
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">
                    ₹{p.price}
                  </span>
                  <span className="text-sm line-through text-gray-400">
                    ₹{p.mrp}
                  </span>
                  <span className="text-sm text-green-600">
                    {p.discount}
                  </span>
                </div>

                <span className="inline-block text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded">
                  {p.offer}
                </span>
              </div>

              {/* ADD */}
              <div className="flex items-end">
                <button className="border border-pink-600 text-pink-600 px-4 py-1.5 rounded-lg font-semibold">
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COUPON BAR */}
      <div className="sticky bottom-0 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm py-3 text-center">
        Apply coupon to get <b>EXTRA 15% OFF</b> on medicines
      </div>
    </div>
  );
}
