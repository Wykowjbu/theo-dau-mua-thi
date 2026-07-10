import {ScalesBalanced} from "@gravity-ui/icons";
import {Alert} from "@heroui/react";
import {legalDisclaimer} from "@/data/incidents";

export function LegalNotice({text = legalDisclaimer}: {text?: string}) {
  return (
    <Alert status="warning" className="mt-8">
      <Alert.Indicator><ScalesBalanced width={20} height={20} aria-hidden="true" /></Alert.Indicator>
      <Alert.Content><Alert.Title>Ghi chú pháp lý</Alert.Title><Alert.Description>{text}</Alert.Description></Alert.Content>
    </Alert>
  );
}
