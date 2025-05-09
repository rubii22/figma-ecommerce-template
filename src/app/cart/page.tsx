export default function CartPage() {
    return (
      <div className="p-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Home / <span className="text-gray-700 font-semibold">Cart</span>
          </p>
        </div>
  
        {/* Cart Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border-b border-gray-200">Product</th>
                <th className="p-4 border-b border-gray-200">Price</th>
                <th className="p-4 border-b border-gray-200">Quantity</th>
                <th className="p-4 border-b border-gray-200">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {/* Product Row 1 */}
              <tr>
                <td className="p-4 border-b border-gray-200 flex items-center gap-4">
                  <img
                    src="/sticker.png"
                    alt="LCD Monitor"
                    className="h-16 w-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold text-gray-700">LCD Monitor</p>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-gray-700">$650</td>
                <td className="p-4 border-b border-gray-200">
                  <select className="border border-gray-300 rounded px-3 py-1">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </td>
                <td className="p-4 border-b border-gray-200 text-gray-700">$650</td>
              </tr>
  
              {/* Product Row 2 */}
              <tr>
                <td className="p-4 border-b border-gray-200 flex items-center gap-4">
                  <img
                    src="/gaming.png"
                    alt="HI Gamepad"
                    className="h-16 w-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold text-gray-700">HI Gamepad</p>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-gray-700">$550</td>
                <td className="p-4 border-b border-gray-200">
                  <select className="border border-gray-300 rounded px-3 py-1">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </td>
                <td className="p-4 border-b border-gray-200 text-gray-700">$1100</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        {/* Buttons Section */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <button className="bg-transparent border border-gray-400 text-gray-600 px-4 py-2 rounded hover:bg-gray-100">
            Return To Shop
          </button>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900">
            Update Cart
          </button>
        </div>
  
        {/* Coupon and Cart Total Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Coupon Code */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-grow border border-gray-300 rounded px-4 py-2"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Apply Coupon
            </button>
          </div>
  
          {/* Cart Total */}
          <div className="border border-gray-300 rounded p-6">
            <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700">Subtotal:</p>
              <p className="font-semibold text-gray-800">$1750</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700">Shipping:</p>
              <p className="font-semibold text-gray-800">Free</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-semibold">Total:</p>
              <p className="text-lg font-bold text-gray-900">$1750</p>
            </div>
            <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
  