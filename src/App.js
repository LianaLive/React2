// Импортируем необходимые библиотеки
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Product from './components/Product';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { createContext, useContext, useState,useEffect  } from "react";
const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  // Локальное состояние для списка задач
  const storedValue = localStorage.getItem('cartproducts') 
    ? JSON.parse(localStorage.getItem('cartproducts')) 
    : [];
  const [products, setProducts] = useState(storedValue);
  useEffect(() => {
    localStorage.setItem('cartproducts', JSON.stringify(products));
  }, [products]);
  // Функция для добавления новой задачи
  const addProduct = (product) => {
    setProducts((prevProducts) => {
      // Проверяем, есть ли уже продукт с таким id
      const isProductExist = prevProducts.some((p) => p.id === product.id);
      if (isProductExist) {
        // Если продукт с таким id уже существует, возвращаем предыдущий массив без изменений
        console.warn(`Продукт с id ${product.id} уже существует и не был добавлен.`);
        return prevProducts;
      }
  
      // Если id уникален, добавляем продукт
      return [...prevProducts, product];
    });
  };
  // Функция для удаления задачи по индексу
  const removeProduct = (id) => {

    setProducts((prevProducts) => prevProducts.filter((product) => product.id != id));

  };

  // Объект, содержащий состояние и методы управления
  const value = {
    products, // Список задач
    addProduct, // Метод для добавления задачи
    removeProduct, // Метод для удаления задачи
  };

  // Провайдер предоставляет состояние и методы всем дочерним компонентам
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  // Проверка: если контекст используется вне провайдера, выбрасываем ошибку
  if (!context) {
    throw new Error(
      "useGlobalContext должен использоваться внутри GlobalProvider"
    );
  }

  return context;
};


// Основной компонент приложения
const App = () => (
    <GlobalProvider>
  <Router>
    {/* Определение маршрутов */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  </GlobalProvider>
);


export default App;