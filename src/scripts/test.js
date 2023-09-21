// https://awexnuldmrybuhripyxr.supabase.co

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3ZXhudWxkbXJ5YnVocmlweXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3MzEzODUsImV4cCI6MTk5NDMwNzM4NX0.oiwJey3e46ewy1-kC2D-dKF-l7ESxOX8UV7n1hLOizs

fetch("https://awexnuldmrybuhripyxr.supabase.co/rest/v1/artist?select=id,name,genre,image", {
  method: "GET",
  headers: {
    apikey: "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3ZXhudWxkbXJ5YnVocmlweXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3MzEzODUsImV4cCI6MTk5NDMwNzM4NX0",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  items.forEach();
}
