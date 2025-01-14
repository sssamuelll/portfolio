import React, { useEffect, useRef, useState } from 'react';
import './Feed.css';

// Definimos el tipo para un post individual
type Post = {
  id: number;
  image: string; // URL de la imagen o portada
  name: string;  // Título del post
  description: string; // Descripción del post
  category: string;    // Categoría del post
  tags: string[];      // Lista de tags asociados
  media: string[];     // URLs de imágenes o videos
  startDate?: string;  // Fecha opcional para proyectos
  endDate?: string;    // Fecha opcional para proyectos
  link?: string;       // Enlace opcional
};

type FeedProps = {
  posts?: Post[]; // Hacemos que posts sea opcional
};

const Feed: React.FC<FeedProps> = ({ posts = [] }) => {
  // Estado con el listado de posts que se ven
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const nextIndexRef = useRef<number>(0);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const POSTS_PER_PAGE = 5;

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  const loadMorePosts = () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const start = nextIndexRef.current;
    const end = start + POSTS_PER_PAGE;

    if (start >= filteredPosts.length) {
      setHasMore(false);
      setLoading(false);
      return;
    }

    const newPosts = filteredPosts.slice(start, end);
    setVisiblePosts((prev) => [...prev, ...newPosts]);
    nextIndexRef.current = end;

    if (end >= filteredPosts.length) {
      setHasMore(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    nextIndexRef.current = 0;
    setVisiblePosts([]);
    setHasMore(true);
    loadMorePosts();
  }, [selectedTag]);

  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts();
        }
      },
      { threshold: 0.1 }
    );

    const sentinel = observerRef.current;
    if (sentinel) observer.observe(sentinel);

    return () => {
      if (sentinel) observer.unobserve(sentinel);
    };
  }, [hasMore, loading, filteredPosts]);

  return (
    <>
        <>
          <div className="tag-filter">
           
            {posts.length > 0 && (
              <button
                onClick={() => setSelectedTag(null)}
                className={!selectedTag ? 'active' : ''}
              >
                All
              </button>
            )}
            {Array.from(new Set(posts.flatMap((post) => post.tags))).map((tag) => (
              <button
                key={tag}
                className={selectedTag === tag ? 'active' : ''}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="feed-container">
            {visiblePosts.map((post) => (
              <div key={post.id} className="feed-item">
                <div className="feed-image-container">
                  <img src={post.image} alt={post.name} className="feed-image" />
                  <div className="feed-overlay">
                    {post.tags.length > 0 && (
                      <div className="feed-tags">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="tag-item">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3 className="feed-title">{post.name}</h3>
                  </div>
                </div>
                <div className="feed-info">
                  <p>{post.description}</p>
                  {post.link && (
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      View More
                    </a>
                  )}
                </div>
              </div>
            ))}

            <div ref={observerRef} style={{ height: '20px', margin: '10px 0' }} />
            {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
            
          </div>
        </>
      
    </>
  );
};

export default Feed;
