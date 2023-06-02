import useSWR from "swr";

interface StudentDetailProps {
  studentId: string;
}

function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    `/students/${studentId}`,
    {
      revalidateOnFocus: true,
    }
  );

  const handleMutate = () => {
    mutate({ name: "Trung" }, true); // if options is true it will temporarily set data and it will trigger the api to update data and add to UI
  };
  return (
    <div>
      Student {data?.name || "---"}{" "}
      <button onClick={handleMutate}>Mutate</button>
    </div>
  );
}

export default StudentDetail;
