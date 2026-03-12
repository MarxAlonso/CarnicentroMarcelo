import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import imageBlog1 from '../../assets/blog/blog_header_nutrition_beef.png';

const blogPosts = [
  {
    id: 1,
    title: "La Importancia de la Carne de Res en el Desarrollo Humano",
    excerpt: "Descubre por qué la carne roja es fundamental para niños, jóvenes y adultos desde una perspectiva nutricional y médica.",
    image: imageBlog1,
    date: "12 de Marzo, 2026",
    link: "/blog/importancia-carne-res",
    category: "Salud y Nutrición"
  }
];

const BlogListing: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-sm font-bold tracking-widest text-[#a90a0a] uppercase mb-2">Nuestro Blog</h1>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Cultura <span className="text-[#a90a0a]">Carnívora</span> y Bienestar
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Aprende sobre cortes, nutrición y secretos de la carnicería tradicional para mejorar tu salud y tus platos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#a90a0a] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-gray-400 text-sm mb-2">{post.date}</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#a90a0a] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  to={post.link}
                  className="inline-flex items-center gap-2 text-[#a90a0a] font-black group-hover:translate-x-2 transition-transform uppercase text-sm tracking-widest"
                >
                  Leer Artículo Completo <span className="text-xl">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListing;
