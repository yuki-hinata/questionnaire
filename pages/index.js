import { useForm, Controller } from "react-hook-form";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import firebase from "../config/firebase";

export default function Home() {
  const user = firebase.firestore().collection("answer");
  const onSubmit = (data) => {
    user.add(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();
  return (
    <>
      <Container>
        <h1>プログラミング学習に関するアンケート</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Q1.名前を入力してください。(匿名可能)</label>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChange={onChange} />
              )}
            />
          </div>
          <div>
            <label htmlFor="birthday">
              Q2.生年月日を記入してください。例)19991010
            </label>
            <Controller
              name="birthday"
              defaultValue=""
              control={control}
              rules={{ required: true, pattern: /^[0-9]{8}$/ }}
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChange={onChange} />
              )}
            />
            {errors.birthday?.type === "required" ? (
              <span>入力必須です</span>
            ) : null}
            {errors.birthday?.type === "maxLength" ? (
              <span>例のように入力してください。</span>
            ) : null}
          </div>
          <div>
            <span>Q3. 現在、プログラミングを学習していますか？</span>
            <input
              id="isLearning1"
              {...register("isLearning", {
                required: true,
              })}
              name="isLearning"
              type="radio"
              value="true"
            />

            <label htmlFor="isLearning1">はい</label>

            <input
              id="isLearning2"
              {...register("isLearning", {
                required: true,
              })}
              name="isLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="isLearning2">いいえ</label>
            {errors.isLearning && <p>どちらか選択必須です</p>}
          </div>
          <div>
            <span>
              Q4. これまでに、プログラミングを学習したことがありますか？
            </span>
            <input
              id="wasLearning1"
              {...register("wasLearning", {
                required: true,
              })}
              name="wasLearning"
              type="radio"
              value="true"
            />
            <label htmlFor="wasLearning1">はい</label>

            <input
              id="wasLearning2"
              {...register("wasLearning", {
                required: true,
              })}
              name="wasLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="wasLearning2">いいえ</label>
            {errors.wasLearning && <p>どちらか選択必須です</p>}
          </div>
          <div>
            {(watch("isLearning") === "true" ||
              watch("wasLearning") === "true") && (
              <>
                <label htmlFor="language">
                  Q.5 今まで学んできたプログラミング言語を教えてください。
                </label>
                <Controller
                  name="language"
                  defaultValue=""
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Input value={value} onChange={onChange} />
                  )}
                />
              </>
            )}
          </div>
          <input type="submit" value="アンケートを提出する" />
        </form>
      </Container>
    </>
  );
}
