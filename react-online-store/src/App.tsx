import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Suggestions from './components/Suggestions';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import { getMainPage, searchProducts } from './api';
import { Product, Category } from './types';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMainPage()
      .then((res) => {
        const data = res.data;

        setProducts(data.products || []);
        setCategories(data.categories || []);

        
        const wordsSet = new Set<string>();

        (data.products || []).forEach((p: Product) => {
          if (p.name) {
            const firstWord = p.name.trim().split(' ')[0];
            if (firstWord && firstWord.length > 1) {
              wordsSet.add(firstWord);
            }
          }
        });

        setSuggestions(Array.from(wordsSet).slice(0, 10));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка загрузки главной страницы:', err);
        setLoading(false);
      });
  }, []);

  
  useEffect(() => {
    if (!search.trim()) {
      getMainPage().then((r) => setProducts(r.data.products || []));
      return;
    }

    const timer = setTimeout(() => {
      searchProducts(search)
        .then((r) => setProducts(r.data.products || []))
        .catch(() => setProducts([]));
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 20px', fontSize: '20px', color: '#555' }}>
        Загрузка товаров...
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 16px',
        background: '#f7f7f7',
        minHeight: '100vh',
      }}
    >
      <Header />
      <SearchBar value={search} onChange={setSearch} />
      <Suggestions words={suggestions} onClick={setSearch} />
      <Categories categories={categories} />
      <ProductList products={products} />
    </div>
  );
}