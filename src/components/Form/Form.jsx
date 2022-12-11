import { Component } from 'react';
import { Button } from '../Button';
import styles from './Form.module.css';

export class Form extends Component {
  state = {
    name: '',
    email: '',
    number: '',
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const { name, email, number } = this.state;
    e.preventDefault();

    this.props.onSubmit({ name, email, number });
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      email: '',
      number: '',
    });
  };

  render() {
    const { name, email, number } = this.state;

    return (
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            <span className={styles.labelText}>Full name</span>
            <input
              type='text'
              name='name'
              className={styles.input}
              placeholder='Enter Name'
              onChange={this.handleChange}
              value={name}
            />
          </label>

          <label className={styles.label}>
            <span className={styles.labelText}>Email address</span>
            <input
              type='email'
              name='email'
              className={styles.input}
              placeholder='Enter Email'
              onChange={this.handleChange}
              value={email}
            />
          </label>

          <label className={styles.label}>
            <span className={styles.labelText}>Email address</span>
            <input
              type='tel'
              name='number'
              className={styles.input}
              placeholder='Enter Email'
              onChange={this.handleChange}
              value={number}
            />
          </label>

          <Button type='submit'>Create</Button>
        </form>
      </div>
    );
  }
}
