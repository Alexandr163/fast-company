import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import qualitiesService from "../service/qualities.service";
import { toast } from "react-toastify";

const QualitiesContext = React.createContext();

export const useQualities = () => {
    return useContext(QualitiesContext);
};

export const QualitiesProvider = ({ children }) => {
    const [qualities, setQualities] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getQualitiesList() {
        try {
            const { content } = await qualitiesService.fetchAll();
            setQualities(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    useEffect(() => {
        getQualitiesList();
    }, []);

    function getQuality(id) {
        return qualities.find((q) => q._id === id);
    }
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
        console.log(message);
    }

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    return (
        <QualitiesContext.Provider value={{ isLoading, qualities, getQuality }}>
            {children}
        </QualitiesContext.Provider>
    );
};

QualitiesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
