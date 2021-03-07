package com.codecool.hackernews;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "hackerTopNewsServlet", urlPatterns = {"/top"}, loadOnStartup = 1)
public class HackerTopNewsServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        String title = "Michael Hackson Top news";
        String page = request.getParameter("page");
        if(page == null){
            page = "1";
        }
        out.println(
                "<html>\n" +
                        "<head>" +
                        "  <title>" + title + "</title>" +
                        "  <link rel=\"stylesheet\" type=\"text/css\" href='/static/css/site.css' />" +
                        "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\">" +
                        "<link rel=\"icon\" href='/static/css/news.ico'/>" +
                        "<script src='/static/js/main.js' defer></script>" +
                        "</head>\n" +
                        "<body>\n" +
                        "<h1 id=\"whichApi\" data-api=\"top\" align = \"center\">" + title + "</h1>\n" +
                        "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n" +
                        "\n" +
                        "    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n" +
                        "        <ul class=\"navbar-nav mr-auto\">\n" +
                        "            <li class=\"nav-item\">\n" +
                        "                <a class=\"nav-link\" href=\"/\">Hackson news <span class=\"sr-only\">(current)</span></a>\n" +
                        "            </li>\n" +
                        "            <li class=\"nav-item\">\n" +
                        "                <a class=\"nav-link\" href=\"/top\">Top news <span class=\"sr-only\">(current)</span></a>\n" +
                        "            </li>\n" +
                        "            <li class=\"nav-item\">\n" +
                        "                <a class=\"nav-link\" href=\"/newest\">Newest <span class=\"sr-only\">(current)</span></a>\n" +
                        "            </li>\n" +
                        "            <li class=\"nav-item\">\n" +
                        "                <a class=\"nav-link\" href=\"/jobs\">Jobs <span class=\"sr-only\">(current)</span></a>\n" +
                        "            </li>\n" +
                        "        </ul>\n" +
                        "    </div>\n" +
                        "</nav>" +
                        "   <button id=\"prev\" class=\"btn btn-outline-info btn-sm\" onclick=\"previous_page_single('https://api.hnpwa.com/v0/news/')\" >Previous</button>\n" +
                        "   <button id=\"next\" class=\"btn btn-outline-info btn-sm\" onclick=\"next_page_single('https://api.hnpwa.com/v0/news/')\" >Next</button>\n" +
                        "   <br><br>" +
//                        "   <button id=\"prev\" class=\"btn btn-outline-info btn-sm\" onclick=\"previous_page_single('https://api.hnpwa.com/v0/news/" + page + ".json#')\" >Previous</button>\n" +
//                        "   <button id=\"next\" class=\"btn btn-outline-info btn-sm\" onclick=\"next_page_single('https://api.hnpwa.com/v0/news/" + page + ".json#')\" >Next</button>\n" +
//                        "   <br><br>" +
                        (page == null ?
                                "<p id=\"pageIndex\" data-page-number=" + 1 + " data-all-page-number=10 ></p>\n":
                                "<p id=\"pageIndex\" data-page-number=" + page + " data-all-page-number=10 ></p>\n") +
                        "<div id=\"contents\" class=\"container\">" +
                        "</div>\n" +
                        "</body></html>"
        );
    }
}