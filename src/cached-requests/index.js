const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL_SERVER;

const reFetch = 50;

export async function getCategories() {
  const res = await fetch(`${BaseUrl}/category`, {
    next: { revalidate: reFetch },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getAllProducts() {
  const res = await fetch(`${BaseUrl}/product/all`, {
    next: { revalidate: reFetch },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getAllRecipes() {
  const res = await fetch(`${BaseUrl}/recipe`, {
    next: { revalidate: reFetch },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getSingleReceipe(slug) {
  const res = await fetch(`${BaseUrl}/recipe/${slug}`, {
    next: { revalidate: reFetch },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

//blogs
export async function getAllBlogs() {
  const res = await fetch(`${BaseUrl}/blog`, {
    next: { revalidate: reFetch },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function getSingleBlog(slug) {
  const res = await fetch(`${BaseUrl}/blog/${slug}`, {
    next: { revalidate: reFetch },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getProductById(slug) {
  const res = await fetch(`${BaseUrl}product/${slug}`, {
    next: { revalidate: reFetch },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function getSingleProductReview(id) {
  const res = await fetch(`${BaseUrl}/productReview/${id}`, {
    next: { revalidate: reFetch },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getAllSizes() {
  const res = await fetch(`${BaseUrl}/size`, {
    next: { revalidate: reFetch },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getAllFlavor() {
  const res = await fetch(`${BaseUrl}/flavor/all`, {
    next: { revalidate: reFetch },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
