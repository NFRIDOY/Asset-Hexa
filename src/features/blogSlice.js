import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//https://asset-hexa-server.vercel.app
//http://localhost:5000
export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://asset-hexa-server.vercel.app",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: "blogAPI",
  endpoints: (builder) => ({
    // Post blog
    postBlog: builder.mutation({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        body: data,
      }),
      providesTags: ["blogAPI"],
    }),
    // Get all blogs data
    getBlogs: builder.query({
      query: ({ currentPage, BlogsPerPage }) =>
        `/blogs?page=${currentPage}&size=${BlogsPerPage}`,
      providesTags: ["blogAPI"],
    }),
    // Get single blog data
    getBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ["blogAPI"],
    }),
    // update blog like data
    likeBlog: builder.mutation({
      query: (data) => ({
        url: `/blogs/${data?.id}?likeORdislike=like`,
        method: "PATCH",
        body: data?.likeData,
      }),
      invalidatesTags: ["blogAPI"],
    }),
    // update blog dislike data
    dislikeBlog: builder.mutation({
      query: (data) => ({
        url: `/blogs/${data?.id}?likeORdislike=dislike`,
        method: "PATCH",
        body: data?.dislikeData,
      }),
      invalidatesTags: ["blogAPI"],
    }),
    // update blog comment data
    commentBlog: builder.mutation({
      query: (data) => ({
        url: `/blogs/${data?.id}?likeORdislike=comment`,
        method: "PATCH",
        body: data?.commentData,
      }),
      invalidatesTags: ["blogAPI"],
    }),

    // get Bookmarked Data
    getBookmarked: builder.query({
      query: (email) => `/bookmark/${email}`,
      providesTags: ["bookmarkedApi"],
    }),
    // Post Bookmarked Data
    addToBookmark: builder.mutation({
      query: (bookmarkData) => ({
        url: "/bookmark",
        method: "POST",
        body: bookmarkData,
      }),
      invalidatesTags: ["bookmarkedApi"],
    }),
    // Post Bookmarked Data
    removeFromBookmark: builder.mutation({
      query: (id) => ({
        url: `/bookmark/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bookmarkedApi"],
    }),
    // Update Blog Verification Data
    updateVerification: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["blogAPI"],
    }),
    // Update Blog Like or dislike Data
    unlikeOrUndislike: builder.mutation({
      query: (data) => ({
        url: `/blog/deleteLD/${data?.id}?email=${data?.email}&queryArray=${data?.query}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogAPI"],
    }),
    // Delete Comment
    deleteComment: builder.mutation({
      query: (data) => ({
        url: `/blog/deleteComment/${data?.id}?email=${data?.email}&commentID=${data?.commentID}`,
        method: "PATCH",
      }),
      invalidatesTags: ["blogAPI"],
    }),
  }),
});
// invalidatesTags: ["BlogAPI"], for mutations {update,delete,create}
export const {
  usePostBlogMutation,
  useGetBlogsQuery,
  useGetBlogQuery,
  useLikeBlogMutation,
  useDislikeBlogMutation,
  useCommentBlogMutation,
  useGetBookmarkedQuery,
  useAddToBookmarkMutation,
  useRemoveFromBookmarkMutation,
  useUpdateVerificationMutation,
  useUnlikeOrUndislikeMutation,
  useDeleteCommentMutation,
} = blogApi;
