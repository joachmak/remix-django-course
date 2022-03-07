export default function Error() {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return <>{urlParams.get("error")}</>;
  } catch (e: any) {
    return <></>;
  }
}
