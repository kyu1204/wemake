CREATE OR REPLACE VIEW community_post_list_view AS
SELECT
    posts.post_id,
    posts.title,
    posts.created_at,
    topics.name as topic,
    profiles.name as author,
    profiles.avatar as author_avatar,
    profiles.username as author_username,
    posts.upvotes,
    topics.slug as topic_slug
FROM posts
INNER JOIN topics USING (topic_id)
INNER JOIN profiles USING (profile_id);


select * from community_post_list_view;
