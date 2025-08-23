"use client"
import Link from "next/link";
import { useCourseStore } from "@/store/useCourseStore";


export default function Cart() {
  const {
    cart,
    removeFromCart,
    clearCart,
    markAsPaid,
  } = useCourseStore();

  // const total = cart.reduce((sum, course) => sum + (course.price || 0), 0);
  const total = cart.reduce((sum, course) => sum + Number(course.price ?? 0), 0);

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY || "";
  const email = "customer@email.com"; // Replace with user email
  const componentProps = {
    email,
    amount: total * 100, // Paystack expects amount in kobo
    metadata: { cart },
    publicKey,
    text: "Pay Now",
    onSuccess: (reference: any) => {
      console.log("Payment successful:", reference);

      // ✅ Mark courses as paid
      const courseIds = cart.map((c) => c._id);
      markAsPaid(courseIds);

      // ✅ Clear the cart
      clearCart();
    },
    onClose: () => alert("Payment closed"),
  };

  //    "react-hls-player": "^3.0.7",

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-900">Course Checkout Cart</h1>
      <div className="min-h-screen bg-white p-4 md:p-10 rounded-lg ">
        {/*<div className="shadow-[0_4px_6px_rgba(0,0,0,0.1),0_-4px_6px_rgba(0,0,0,0.1),4px_0_6px_rgba(0,0,0,0.1),-4px_0_6px_rgba(0,0,0,0.1)] rounded-xl bg-white min-h-screen bg-white p-4 md:p-10  ">*/}
        {cart.length === 0 ? (
          // ----------------- EMPTY CART -----------------
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty cart"
              className="w-40 h-40 mb-6 opacity-80"
            />
            <h2 className="text-xl font-semibold mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven’t added any courses yet.
            </p>
            <Link href="/overview/course">
              <button className="bg-[#387467] text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                Browse Courses
              </button>
            </Link>

          </div>
        ) : (
          // ----------------- CART ITEMS -----------------
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  ">
            {/* Left - Scrollable Cart Items */}
            <div className="lg:col-span-2 overflow-y-auto  space-y-8">
              <h2 className="font-semibold">{cart.length} Courses in Cart</h2>

              {cart.map((course) => (
                <div
                  key={course._id}
                  className="flex flex-col md:flex-row gap-4 border-b pb-4 "
                >
                  <img
                    src={course.mainImage}
                    alt={course.title}
                    className="w-full md:w-40 h-28 object-cover rounded"
                  />
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold">{course.title}</h3>
                    <div className="flex gap-4 text-sm text-[#387467] mt-8">
                      <button
                        onClick={() => removeFromCart(course._id)}
                        className="hover:underline"
                      >
                        Remove
                      </button>
                      <button className="hover:underline">Save for Later</button>
                      <button className="hover:underline">Move to Wishlist</button>
                    </div>
                  </div>
                  <div className="font-semibold text-[#387467] md:self-start">
                    <p className="text-sm text-gray-600 px-5">
                      {new Intl.NumberFormat("en-NG", {
                        style: "currency",
                        currency: "NGN"
                      }).format(Number(course.price ?? 0))}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Sticky Summary */}
            <div
              className="bg-white  rounded-lg p-6 h-fit lg:sticky lg:top-10 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_-4px_6px_rgba(0,0,0,0.1),4px_0_6px_rgba(0,0,0,0.1),-4px_0_6px_rgba(0,0,0,0.1)]">
              <h2 className="text-lg font-semibold mb-4">Total:</h2>
              <p className="text-2xl font-bold mb-6">
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                }).format(total)}
              </p>

              <button className="w-full bg-[#387467] hover:bg-green-700 text-white py-3 rounded-lg">
                Proceed to Checkout →
              </button>

              <p className="text-xs text-gray-500 mt-2">
                You won’t be charged yet
              </p>

              <button className="w-full border border-[#387467] text-[#387467] mt-6 py-2 rounded-lg">
                Apply Coupon
              </button>
            </div>
          </div>
        )}
      </div>
    </div>

  );
}
