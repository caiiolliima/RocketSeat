import Text from "./components/text";
import CheckIcon from "./assets/icons/Check-Regular.svg?react";
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import SquareIcon from "./assets/icons/Square-Regular.svg?react";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import XIcon from "./assets/icons/X-Regular.svg?react";
import Icon from "./components/icon";
import Badge from "./components/badge";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text className="text-green-base" variant={"body-md"}>
          Olá mundo!
        </Text>
        <Text className="text-green-base" variant={"body-md-bold"}>
          Olá mundo!
        </Text>
        <Text className="text-green-base" variant={"body-sm-bold"}>
          Olá mundo!
        </Text>
      </div>
      <div className="flex gap-1">
        <Icon svg={CheckIcon} />
        <Icon svg={TrashIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={SquareIcon} />
        <Icon svg={XIcon} />
      </div>

      <div>
        <Badge variant={"primary"}>2 de 5</Badge>
        <Badge variant={"secondary"}>5</Badge>
      </div>
    </div>
  );
}
