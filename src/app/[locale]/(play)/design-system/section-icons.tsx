import Link from "next/link";
import {
  Banknote,
  Bookmark,
  Bot,
  Box,
  BoxSelect,
  Briefcase,
  Cake,
  Cast,
  Coins,
  Component,
  Contact,
  CreditCard,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Dices,
  Eraser,
  Inbox,
  Landmark,
  ListChecks,
  Mail,
  Moon,
  MoreHorizontal,
  Network,
  Pencil,
  PiggyBank,
  Puzzle,
  Send,
  Share,
  Share2,
  ShieldAlert,
  Sun,
  User,
  Users,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function SectionIcons() {
  return (
    <section id="icons">
      <Text variant="overline">Icons</Text>
      <Text variant="lead">
        An icon family ensures that all pictograms and ideograms within the
        system share a consistent style, which makes it easier for users to
        understand their meaning and use them correctly.
      </Text>

      <div className="grid grid-cols-4 items-center gap-16 py-16 md:grid-cols-6 lg:grid-cols-12">
        <Network />
        <ShieldAlert />
        <Landmark />
        <Wallet />
        <CreditCard />
        <Banknote />
        <Coins />
        <PiggyBank />
        <Briefcase />
        <User />
        <Users />
        <Contact />
        <Bookmark />
        <Share />
        <Share2 />
        <Send />
        <Mail />
        <Inbox />
        <ListChecks />
        <Cake />
        <Cast />
        <Bot />
        <Pencil />
        <Eraser />
        <Box />
        <Component />
        <Puzzle />
        <BoxSelect />
        <Dice1 />
        <Dice2 />
        <Dice3 />
        <Dice4 />
        <Dice5 />
        <Dice6 />
        <Dices />

        <Button variant="outline" size="sm" asChild>
          <Link href="https://lucide.dev/" target="_blank" rel="noreferrer">
            <MoreHorizontal />
          </Link>
        </Button>
      </div>
    </section>
  );
}
