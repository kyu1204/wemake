create function public.handle_post_upvote()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    update public.posts set upvotes = upvotes + 1 where post_id = new.post_id;
    return new;
end;
$$;

create trigger post_upvote_trigger
after insert on public.post_upvotes
for each row execute function public.handle_post_upvote();


create function public.handle_post_unvote()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    update public.posts set upvotes = upvotes - 1 where post_id = old.post_id;
    return old;
end;
$$;

create trigger post_unvote_trigger
after delete on public.post_upvotes
for each row execute function public.handle_post_unvote();
