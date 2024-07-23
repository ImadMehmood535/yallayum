const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL_SERVER;

const reFetech = 5;

export async function getCategories() {
  const res = await fetch(`${BaseUrl}/category`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getAllProducts() {
  const res = await fetch(`${BaseUrl}/product/all`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getAllRecipes() {
  const res = await fetch(`${BaseUrl}/recipe`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getSingleReceipe(slug) {
  const res = await fetch(`${BaseUrl}/recipe/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

//blogs
export async function getAllBlogs() {
  const res = await fetch(`${BaseUrl}/blog`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function getSingleBlog(slug) {
  const res = await fetch(`${BaseUrl}/blog/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getProductById(slug) {
  const res = await fetch(`${BaseUrl}product/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function getSingleProductReview(id) {
  const res = await fetch(`${BaseUrl}/productReview/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getAllSizes() {
  const res = await fetch(`${BaseUrl}/size`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getAllFlavor() {
  const res = await fetch(`${BaseUrl}/flavor/all`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
