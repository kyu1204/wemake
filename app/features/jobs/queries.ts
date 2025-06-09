import type { SupabaseClient } from "@supabase/supabase-js";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGES } from "./constants";
import type { Database } from "~/supa-client";

export const getJobs = async (
  client: SupabaseClient<Database>,
  {
    limit,
    type,
    location,
    salary,
  }: {
    limit: number;
    type?: (typeof JOB_TYPES)[number]["value"];
    location?: (typeof LOCATION_TYPES)[number]["value"];
    salary?: (typeof SALARY_RANGES)[number];
  }
) => {
  const query = client
    .from("jobs")
    .select(
      `
        job_id,
        position,
        overview,
        company_name,
        company_logo,
        company_location,
        location,
        job_type,
        salary_range,
        created_at
    `
    )
    .limit(limit);

  if (type) {
    query.eq("job_type", type);
  }

  if (location) {
    query.eq("location", location);
  }

  if (salary) {
    query.eq("salary_range", salary);
  }

  const { data, error } = await query;

  if (error) throw error;
  return data;
};

export const getJobById = async (
  client: SupabaseClient<Database>,
  jobId: number
) => {
  const { data, error } = await client
    .from("jobs")
    .select("*")
    .eq("job_id", jobId)
    .single();

  if (error) throw error;
  return data;
};
