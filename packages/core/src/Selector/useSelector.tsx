import { useCallback, useMemo, useRef, useState } from "react";

export const useSelector = () => {
	const [state, setState] = useState<{
		selectedValues: { [key: string]: string | readonly string[] | number };
	}>({
		selectedValues: {}
	});

	const onChange = useCallback(() => {
		console.log(state);
		setState((prev) => ({ ...prev }));
	}, []);

	return [state, onChange];
};
