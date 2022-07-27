const ShopPag = ({ postsPerPage, totalPosts, paginate }) => {
  const totalPages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    totalPages.push(i);
  }

  return (
    <div className="pages">
      {totalPages.map((page) => (
        <button key={page} onClick={() => paginate(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default ShopPag;
