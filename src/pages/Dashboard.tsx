
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, FileText, BarChart, Plus, FileEdit, Eye, Trash } from "lucide-react";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data
  const mockPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      status: "published",
      category: "React",
      views: 1248,
      publishedDate: "2023-04-12",
    },
    {
      id: 2,
      title: "Building Accessible Web Applications",
      status: "published",
      category: "Accessibility",
      views: 823,
      publishedDate: "2023-03-28",
    },
    {
      id: 3,
      title: "TypeScript Best Practices for 2023",
      status: "draft",
      category: "TypeScript",
      views: 0,
      publishedDate: null,
    },
    {
      id: 4,
      title: "Optimizing React Performance",
      status: "draft",
      category: "React",
      views: 0,
      publishedDate: null,
    },
  ];

  const filteredPosts = mockPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const publishedPosts = filteredPosts.filter(post => post.status === "published");
  const draftPosts = filteredPosts.filter(post => post.status === "draft");
  
  // Stats calculations
  const totalViews = mockPosts.reduce((sum, post) => sum + post.views, 0);
  const totalPosts = mockPosts.length;
  const avgViewsPerPost = totalPosts > 0 ? Math.round(totalViews / totalPosts) : 0;
  
  // Render posts in a table
  const renderPostsList = (posts: typeof mockPosts) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead className="hidden md:table-cell">Category</TableHead>
          <TableHead className="hidden md:table-cell">Status</TableHead>
          <TableHead className="hidden md:table-cell">Views</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
              No posts found
            </TableCell>
          </TableRow>
        ) : (
          posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge variant="outline">{post.category}</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge variant={post.status === "published" ? "default" : "secondary"}>
                  {post.status}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">{post.views}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <FileEdit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  {post.status === "published" && (
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                  )}
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );

  return (
    <div className="container py-8">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Content Dashboard</h1>
            <p className="text-muted-foreground">Manage your blog posts and track performance</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Post
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalPosts}</div>
              <p className="text-xs text-muted-foreground">
                {publishedPosts.length} published, {draftPosts.length} drafts
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalViews}</div>
              <p className="text-xs text-muted-foreground">
                Across all published posts
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Views</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgViewsPerPost}</div>
              <p className="text-xs text-muted-foreground">
                Per published post
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-3">
            <TabsTrigger value="all">All Posts</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {renderPostsList(filteredPosts)}
          </TabsContent>
          <TabsContent value="published">
            {renderPostsList(publishedPosts)}
          </TabsContent>
          <TabsContent value="drafts">
            {renderPostsList(draftPosts)}
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <div>Showing {filteredPosts.length} posts</div>
          <div>
            <Button variant="outline" size="sm" disabled>
              View Advanced Analytics
            </Button>
            <span className="ml-2 text-xs">Pro feature</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
