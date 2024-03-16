"use client";

import { addUser, register } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  useEffect(() => {
    
  } , [state])

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;