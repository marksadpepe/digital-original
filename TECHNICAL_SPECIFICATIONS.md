Backend Developer Task

Using the provided PostgreSQL schema, data, and mocks, complete the following tasks. Assume that the data set could be significantly larger, so consider performance when crafting your solution.

**Task Requirements:**

1. Database Schema Setup: Use the following schema and sample data to create your PostgreSQL tables and populate them:
   - Tables: Artworks, Artists, Galleries, Files, Classifications, Artworks_Files, Artworks_Artists, Artworks_Classifications
   - Sample Data: Provided in the SQL example with 10 artworks, 4 artists, and 2 galleries.
2. Primary Task: Write raw SQL queries (or use Knex) with TypeScript to simulate a repository that will be used in a NestJS environment to retrieve:
   - Paginated Artworks List with Dynamic Classification Filtering: Retrieve a paginated list of artworks filtered by an optional classification parameter, using offset and limit for pagination. For each artwork, retrieve its name, classifications, related artists (with their names), and associated galleries (with names). Additionally, calculate and include the artist’s total portfolio value (sum of all artworks related to that artist). If no classification filter is provided, return all artworks.
   - Single Artist with Artwork Count: Retrieve an artist by ID, including their name (prefer name_english if available; otherwise, use name_original), photo, and a count of artworks associated with them.
   - Artists with No Artworks: Retrieve a list of all artists who have no artworks, including their names and galleries. For each artist without artworks, include a placeholder for their portfolio value as 0.
3. Handling Soft Deletes: Add a deleted_at timestamp column to Artworks, Artists, and Galleries to simulate a soft delete functionality. Adjust your queries to exclude any records where deleted_at is not null.
4. Type Definition: Define TypeScript types for the response structure of these queries to ensure type safety.
5. NestJS Emulation: Demonstrate your repository queries in an environment that emulates NestJS, showing how the repository functions could be used in a service or controller.

**Pagination Requirements**

In your paginated query, use the following:

- limit: Specifies the maximum number of artworks to retrieve in one response.
- offset: Specifies the starting point for the retrieval, allowing for paginated navigation.

For example, if a client requests limit=10 and offset=20, the query should return 10 artworks starting from the 21st record.

**Deliverables:**

- SQL or Knex queries for all tasks.
- TypeScript types for the response data.
- Code example demonstrating the query usage in a NestJS-like environment.
