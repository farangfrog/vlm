<?php
    $PAGETITLE = "VLM Management";
    include("htmlstart.php");

    function adminlistbox($list, $title, $style=null) {
        echo "<div class=\"adminbox\"";
        if (!is_null($style)) {
            echo "style=\"$style\"";
            }
        echo ">";
        echo "<h3>$title</h3>";
        echo "<ul>";
        foreach ($list as $page => $pagedef) {
            if ($pagedef == "block") {
                echo "</ul><ul>";
                continue;
            }
            echo "<li>";
            echo "<a href=\"$page\">$pagedef</a>";
            echo "</li>";
        }
        echo "</ul></div>";
    }

    echo "<div style=\"display:inline;float:left\">";

    $tablepages = Array(
        "adminwizard.php" => "Admin Wizard (old admin interface)",
        "connectas.php" => "Connect as... (use with caution)",
        "reinit_player_password.php" => "Change player password (use with caution)",
        );
    adminlistbox($tablepages, "Miscellaneous");


    $tablepages = Array(
        "racespreview.php" => "Incoming Races - Calendar Management",
        "races_instructions.php" => "Races instructions",
        "block3" => "block",
        "races.php" => "Races definitions (no uploading, see below)",
        "importrace.php" => "Import race from another server",
        "uploadracemap.php" => "Race map upload",
        "block4" => "block",
        "waypoints.php" => "Waypoints definitions",
        "races_waypoints.php" => "Races_waypoints definitions",
        "block2" => "block",
        "racesgroups.php" => "Races groups definitions",
        "racestogroups.php" => "Join Races to RacesGroups",
        "block5" => "block",
        "nszsegments.php" => "NSZ Segments definitions",
        "nszracesegment.php" => "NSZ Segments to races definitions",
        );
    adminlistbox($tablepages, "Race administration");


    $tablepages = Array(
        "flags.php" => "Flags definitions (no uploading, see below)",
        "uploadflag.php" => "Flag upload",
        );
    adminlistbox($tablepages, "Flag management");

    echo "</div>";
    echo "<div style=\"display:inline;float:left;\">";

    $tablepages = Array(
        "post_news.php" => "Quick news posting !",
        "news.php" => "News management",
        );
    adminlistbox($tablepages, "News & Notifications (EXPERIMENTAL)");

    $tablepages = Array(
        "users.php" => "Boats (Users)",
        "players.php" => "Players",
        "players_pending.php" => "Players Pending",
        "playerstousers.php" => "Links between players & users",
        "block3" => "block",
        "user_prefs.php" => "Prefs (Boats/Users)",
        "players_prefs.php" => "Prefs (Players)",
        );
    adminlistbox($tablepages, "Boats & players administration");

    $tablepages = Array(
        "userstotrophies.php" => "Manage users engaged in trophies",
        "trophies.php" => "Manage trophies",
        "block3" => "block",
        "boats_OAD.report.php"  => "List Boats engaged on Once a day trophy",
        );
    adminlistbox($tablepages, "Trophies administration [EXPERIMENTAL]");


    $tablepages = Array(
        "user_action.php" => "Browse Boat/Player Actions",
        "admin_changelog.php" => "Browser Admin Changelog",
        );
    adminlistbox($tablepages, "Actions watch");

    echo "</div>";
    echo "<div style=\"display:inline;float:left;\">";

    $reportpages = Array(
        "racemaps_without_race.report.php"  => "Racemaps with no corresponding race",
        "races_without_racemap.report.php"  => "Races with no corresponding racemap",
        "boats_with_more_than_one_owner.report.php" => "Boats with more than one owner",
        "boats_without_owner.report.php" => "Boats without owner",
        "boats_with_boatsitter_but_without_owner.report.php" => "Boats with boatsitter(s) but without owner",
        "boats_with_strange_polar.report.php" => "Boats engaged with strange polar",
        );

    adminlistbox($reportpages, "Reports");

    $strangepages = Array(
        "strange_results_for_unknown_races.php"    => "Results for unknown races.",
        "strange_engaged_in_unknown.php"    => "Engaged in unknown race.",
        "strange_unknown_flag.php"          => "Boat with Unknown flag.",
        "players_pending_for_too_much_time.fixreport.php" => "Players pending for too much time",
        "players_without_boat.report.php" => "Players without boats for too much time",
        "boats_with_unknown_polar.fixreport.php" => "Boats with unknown polar",
        );
    
    adminlistbox($strangepages, "Report & fix [Use with caution to fix inconsistencies]");

    $reportpages = Array(
        "user_agents.php"                   => "User_agent statistics",
        "possible_duplicates.php"           => "Duplicates by IP",
        "boat_action_count.report.php" => "Boats actions count(*)",
        "player_action_count.report.php" => "Players actions count(*)",
        "player_boat_owned_count.report.php" => "Boat per player count(*)",
        "server_action_count.report.php" => "Servers actions count(*)",
        );

    adminlistbox($reportpages, "Stats");

    echo "</div>";

    echo "<div class=\"adminbox\" id=\"adminlastopbox\">";
    echo "<h3>Last operations</h3>";
    htmlQuery("SELECT updated, user AS admin, host, operation, tab, rowkey, col AS field, LEFT(oldval, 30) AS oldval, LEFT(newval, 30) AS newval FROM admin_changelog ORDER BY updated DESC LIMIT 10;");
    echo "</div>";
    
    
    include("htmlend.php");
?>
