const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL_SERVER;

const reFetech = 360;

export async function getCategories() {
  const res = await fetch(`${BaseUrl}/category`, {
    next: { revalidate: reFetech },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getAllProducts() {
  const res = await fetch(`${BaseUrl}/product/all`, {
    next: { revalidate: reFetech },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getProductById(slug) {
  const res = await fetch(`${BaseUrl}/product/${slug}`, {
    next: { revalidate: reFetech },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
