import SupabaseComments from "./SupabaseComments";
import FacebookComments from "./FacebookComments";

export default function Comments() {
  return (
    <div className="comments-section relative z-10 max-w-6xl mx-auto p-4 flex flex-col lg:flex-row gap-6">
      <SupabaseComments />
      <FacebookComments />
    </div>
  );
}
