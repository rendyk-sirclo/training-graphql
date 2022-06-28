import { useMutation } from "@apollo/client";
import { postSubscribeEmail } from "@/lib/services/graphql/schemaSubscribe";

const SubscribePage = () => {
  let input;
  const [doSubscribeEmail, { data, loading, error }] =
    useMutation(postSubscribeEmail);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div className="mainSection">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          doSubscribeEmail({ variables: { email: input.value } });
          input.value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
          type="email"
          placeholder="Enter your email"
          required
        />

        <button type="submit">Subscribe</button>
      </form>
      <div>
        {data && data.subscribe.status.code === 200 ? (
          <p>
            {data.subscribe.status.response} - {data.subscribe.status.message}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SubscribePage;
