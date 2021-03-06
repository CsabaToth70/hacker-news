package com.codecool.hackernews;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "hackerNewestServlet", urlPatterns = {"/newest"}, loadOnStartup = 1)
public class HackerNewestServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        String title = "Michael Hackson Newest news";

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
                        "<h1 id=\"whichApi\" data-api=\"newest\" align = \"center\">" + title + "</h1>\n" +
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
                        "<div id=\"contents\" class=\"container\" </div>\n" +
                        "</body></html>"
        );
    }
}
