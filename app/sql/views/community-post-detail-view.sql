create or replace view community_post_detail_view as
select
    posts.post_id,
    posts.title,
    posts.content,
    posts.upvotes,
    posts.created_at,
    topics.topic_id,
    topics.name as topic_name,
    topics.slug as topic_slug,
    count(post_replies.post_id) as replies,
    profiles.profile_id,
    profiles.name as author_name,
    profiles.avatar as author_avatar,
    profiles.role as author_role,
    profiles.created_at as author_created_at
from posts
inner join topics using (topic_id)
left join post_replies using (post_id)
inner join profiles on (posts.profile_id = profiles.profile_id)

group by posts.post_id, topics.topic_id, topics.name, topics.slug, 
profiles.profile_id, profiles.name, profiles.avatar, profiles.role, profiles.created_at;


select * from community_post_detail_view;