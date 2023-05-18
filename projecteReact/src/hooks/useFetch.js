import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const responseData = await response.json();
                if (responseData.success == true) {
                    setData(responseData);
                } else {
                    setError(responseData.message || 'Error en la respuesta de la API');
                }
            } catch (error) {
                setError(error.message || 'Error en la solicitud de la API');
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url, options]);

    return { data, error, isLoading };
};

export default useFetch