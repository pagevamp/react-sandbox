import Button from "../../components/Button/Button"
import FormField from "../../components/FormField/FormField"
import useUserFields from "../../hooks/useUserFields"
import styles from "./style.module.css"

const UserInfo = () => {
  const {
    name,
    email,
    items,
    itemInput,
    setItemInput,
    handleNameChange,
    handleEmailChange,
    addItem,
    handleSubmit,
  } = useUserFields()

  return (
    <div className={styles.full}>
      <form onSubmit={handleSubmit}>
        <FormField
          labelName="NAME : "
          className={styles.form}
          placeholder="Enter Name"
          onChange={handleNameChange}
          value={name}
        />
        <FormField
          labelName="Email : "
          className={styles.form}
          placeholder="Enter Name"
          onChange={handleEmailChange}
          value={email}
        />
        <FormField
          className={styles.form}
          placeholder="Add Item"
          onChange={(e) => setItemInput(e.target.value)}
          value={itemInput}
        />

        <Button content="Submit" className={styles.add} type="submit" />
      </form>
      <div className={styles.itemsList}>
        {items.map((item, index) => (
          <p key={index}>
            {" "}
            Item no {index + 1}: {item}
          </p>
        ))}
      </div>
    </div>
  )
}

export default UserInfo
