import { API_METHODS } from './api-constants';
import axios from 'axios';

export const fetchCall = (callback, url, method, payload, ...args) =>
    new Promise((resolve, reject) => {
        let options = {};
        const token = sessionStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };

        if (method === API_METHODS.GET) {
            options = {
                method,
                headers,
                url,
            };
        } else {
            options = {
                method,
                data: payload,
                headers,
                url,
            };
        }

        axios(options)
            .then((response) => {
                callback(response);
            })
            .catch((error) => {
                //Network error
                if (error.toJSON().message === 'Network Error') {
                    callback({ data: { success: false, message: 'No Internet Connection' } });
                }
                if (error.response) {
                    // Request made and server responded
                    callback(error.response);
                } else if (error.request) {
                    // The request was made but no response was received
                    callback(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    callback(error.message);
                }
            });
    });


        // example to call api 
    // const getAppointmentConfirmationTemplate =()=>{
    //     setShowLoader(true);
    //     const formdata = { company_id: companyId,user_id:uuId, role_id:roleId, template_for:templateFor };
    //     apiCall((response) => {
    //         const { data, message, success } = response.data;
    //         if (success) {
    //           // toast.success(message);
    //           // setEditorState(() =>
    //           //   EditorState.createWithContent(ContentState.createFromBlockArray(
    //           //       convertFromHTML(data[0]?.email_template_body)
    //           //     ))
    //           // );
    //           // setConvertedContent(data[0]?.email_template_body);
    //           setEditorContent(data[0]?.email_template_body)
    //           // setAgreementBody(data[0]?.email_template_body);
    //           setShowLoader(false);
    //         } else {
    //           toast.error(message);
    //           setShowLoader(false);
    //         }
    //       },
    //       formdata,
    //       "GET_EMAIL_TEMPLATE"
    //     );
    //   }