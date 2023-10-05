import menu from '../data/demo/food.json';

function Menu() {
  const categories = Object.keys(menu);
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold mb-4">Menu</h1>
      {categories.map((category, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-semibold">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {menu[category].map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500 mb-2">{item.description}</p>
                <p className="text-green-600 font-semibold">${item.price}</p>
                {item.isAvailable ? (
                  <p className="text-green-600 font-semibold">Available</p>
                ) : (
                  <p className="text-red-600 font-semibold">Not Available</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
