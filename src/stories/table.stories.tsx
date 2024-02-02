import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default { title: 'Table'}

const pages = [
  {
    name: "Home",
    isActive: true,
  },
  {
    name: "About",
    isActive: true,
  },
  {
    name: "Contact",
    isActive: false,
  },
]

export const Basic = () => (
  <div className="flex justify-center items-center gap-8 w-[680px]">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pages.map((page) => (
          <TableRow key={page.name}>
            <TableCell className="font-medium">{page.name}</TableCell>
            <TableCell>{page.isActive ? "Activée" : "Désactivée"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
