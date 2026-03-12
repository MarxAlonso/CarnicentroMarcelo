import React from 'react';
import SEO from '../../components/SEO/SEO';
import BlogListing from '../../common/BlogComp/BlogListing';

const BlogPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Blog" 
        description="Explora el blog de Carnicentro Marcelo. Artículos sobre nutrición, salud, cortes de carne y la tradición ganadera."
        keywords="blog carnicería, salud nutrición carne, importancia carne res, secretos carnicero"
      />
      <main>
        <BlogListing />
      </main>
    </>
  );
};

export default BlogPage;
