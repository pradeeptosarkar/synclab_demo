"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" })
      .then((documentId) => router.push(`/documents/${documentId}`))

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note."
    });
  };

  return (
    <div className="h-full flex flex-col space-y-4">

      <h1 className="text-3xl font-medium text-center">
        Welcome to {user?.firstName}&apos;s SyncLab
      </h1>

      {/* <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      /> */}



      <div className="flex flex-row space-x-10 justify-center">
        <Button className="w-60" onClick={onCreate}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Create a new program
        </Button>

        <Button className="w-60" onClick={onCreate}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Create a new project
        </Button>
      </div>

      <div className="flex-row">
        <div className="text-4xl">
          <p>Your Programs</p>
        </div>

        <div>
          
        </div>
      </div>

      <div className="flex-row">
        <div className="text-4xl">
          <p>Your Programs</p>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  );
}

export default DocumentsPage;