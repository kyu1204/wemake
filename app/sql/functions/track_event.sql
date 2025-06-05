create or replace function track_event(
    event_type event_type,
    event_data jsonb
) returns void as $$
declare
    username_var text;
    found_profile_id uuid;
    found_product_id bigint;
    new_event_data jsonb;
    safe_product_id bigint;
begin
    if event_type = 'profile_view' then
        username_var := event_data->>'username';
        if username_var is not null then
            select profile_id into found_profile_id from public.profiles where username = username_var;
            if found_profile_id is not null then
                new_event_data := event_data - 'username';
                new_event_data := jsonb_set(new_event_data, '{profile_id}', to_jsonb(found_profile_id));
                insert into events (event_type, event_data)
                values (event_type, new_event_data);
            end if;
        end if;
    elsif event_type = 'product_view' or event_type = 'product_visit' then
        if (event_data ? 'product_id') then
            begin
                safe_product_id := (event_data->>'product_id')::bigint;
            exception when others then
                safe_product_id := null;
            end;
            if safe_product_id is not null then
                select product_id into found_product_id from public.products where product_id = safe_product_id;
                if found_product_id is not null then
                    insert into events (event_type, event_data)
                    values (event_type, event_data);
                end if;
            end if;
        end if;
    end if;
end;
$$ language plpgsql;
