import { React, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './styles.scss'
import Card from "../../routes/Posts/Card";

const PostsForm = () => {
    const [posts, setPosts] = useState([])

    return (
        <Formik
            initialValues={{
                text: '',
                textarea: '',
                select: '1'
            }}

            validationSchema={Yup.object({
                text: Yup.string()
                    .required('Required'),
                textarea: Yup.string()
                    .required('Required')
            })}

            onSubmit={(values) => {
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: values.text,
                        body: values.textarea,
                        userId: values.select,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => {
                        setPosts([...posts, json])
                    });
            }}
        >
            <div className="container">
                <div className="form-container">
                    <Form action="" id="form">
                        <h3>Post</h3>
                        <Field name="text" type="text"/>
                        <ErrorMessage name="text" component="span" />
                        <Field name="textarea" as="textarea"/>
                        <ErrorMessage name="textarea" component="span" />
                        <Field name="select" as="select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </Field>
                        <Field type="submit" value="Send"/>
                    </Form>
                </div>
                {posts.length > 0 ?
                    posts.map((item) => (
                    <Card post={item}/>
                )) : <Card post={{userId: '', title: 'Nothing', body: 'here...'}}/>}
            </div>
        </Formik>
    )
};

export default PostsForm