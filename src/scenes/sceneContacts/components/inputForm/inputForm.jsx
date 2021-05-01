import React from 'react';
import { Formik, Form } from 'formik';
import { validateMessage } from '../../../../utils/validations/validateMessage';
import { validateEmail } from '../../../../utils/validations/validateEmail';
import { validateUserName } from '../../../../utils/validations/validateUserName';
import { Title } from '../../../../common/title';
import { Root } from './components/root';
import { Button } from './components/button';
import { InputField } from './components/inputField';
import { t } from '../../../../common/localization/t';

export const InputForm = () => (
  <Root>
    <Title>{t('sceneContacts:title')}</Title>
    <Formik 
      initialValues={{ username: '', email: '', message: '', subject:''}}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, { validate }) => { validate(values) }}
    >
      {({ errors, touched }) => (
        <Form style={styles.form}>
          <InputField name="email" placeholder='Email' validate={validateEmail} error={errors.email} touched={touched.email}/>
          <InputField name="username" placeholder='Name' validate={validateUserName} error={errors.username} touched={touched.username}/>
          <InputField name="subject" placeholder='Subject' validate={validateMessage} error={errors.subject} touched={touched.subject}/>
          <InputField name="message" placeholder='Message' validate={validateMessage} error={errors.message} touched={touched.message} component="textarea" rows="6"/>
          <Button type="submit">{t('sceneContacts:submitButton')}</Button>
        </Form>
      )}
    </Formik>
  </Root>
);

const styles = { form: {display: 'flex', flexDirection: 'column'}};