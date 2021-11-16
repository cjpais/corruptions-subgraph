import { BigInt } from "@graphprotocol/graph-ts";
import { PostMessageCall as CorruptionMessage } from "../generated/CorruptionsDataChannel/CorruptionsDataChannel";
import { PostMessageCall as ReflectionMessage } from "../generated/ReflectionsDataChannel/ReflectionsDataChannel";
import { Message as SchemaMessage } from "../generated/schema";

export function handleCorruptionMessage(call: CorruptionMessage): void {
  let message = new SchemaMessage(call.transaction.hash.toHexString());

  message.message = call.inputs.message;
  message.created = call.block.timestamp;
  message.channel = "CORRUPTION";
  message.save();
}

export function handleReflectionMessage(call: ReflectionMessage): void {
  let message = new SchemaMessage(call.transaction.hash.toHexString());
  message.message = call.inputs.message;
  message.created = call.block.timestamp;
  message.channel = "REFLECTION";
  message.save();
}
